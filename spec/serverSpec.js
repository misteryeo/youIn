'use strict';

const mysql = require('mysql');
const schema = require('../server/schema.js');
const expect = require('chai').expect;

// initizalize database
describe('', function() {
  let server;
  let db;

  const clearTables = ( connection, tableNames, done ) => {
    
    let count = 0;

    tableNames.forEach( (table) => {
      // if table exits, drop the table
      count++;
      connection.queryAsync('DROP TABLE IF EXISTS ?', [table])
      .then( () => {
        if (count === tableNames.length){
          schema(connection)
          .then(done); 
        }
      });
    });
  };

  beforeEach( (done) => {
    
    let tables = ['events', 'users', 'users_events', 'friends'];

    db = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'youin'
    });
    
    db.connect( (err) => {
      
      if (err) {
        console.log(err)
        return done(err);
      } else {
        clearTables(db, tables, done);
      }
    });
  });
  // test if tables are created correctly
  
  describe('table schemas should enforce the schema data types', () => {
    let invalidDataThrowsError;
    let validDataThrowsError;
    
    let validUser = {
      username: 'abianco3',
      firstname: 'Anthony',
      lastname: 'Bianco',
      email: 'anthony.bianco3@gmail.com'
    };
  
    // insert correct data into table
    it('should not throw error when validUser is inserted', (done) => {
      db.queryAsync('INSERT into USERS SET ?', [...validUser])
        .then( () => {
          validDataThrowsError = false;
        })
        .error( () => {
          validDataThrowsError = true;
        });
      expect(validDataThrowsError).to.be(false);
      done();
    });
    
    for (let prop of validUser) {
      let user = validUser;
      user[prop] = 12345;

      it('should throw an error when inserting invalid data', (done) => {
        db.queryAsync('INSERT into USER SET ?', [...user])
          .then ( () => {
            invalidDataThrowsError = false;
          })
          .error( () => {
            invalidDataThrowsError = true;
          });

        expect(invalidDataThrowsError).to.be(true);
        done();
      });
    }
        
  });
});
