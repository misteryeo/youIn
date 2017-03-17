'use strict';

const mysql = require('mysql');
const schema = require('../server/schema.js');
const expect = require('chai').expect;

// initizalize database
describe('', function() {
  let server;
  let db;

  const clearTables = ( connection, tableNames, done ) => {

    tableNames.forEach( (table, i) => {
      // if table exits, drop the table

      connection.query('DROP TABLE IF EXISTS ' + table, function() {
        if (i === tableNames.length - 1){
          schema(db)
          .then( () => {
            return done();
          })
          .catch((err) => {
            return done(err);
          });
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
        return done();
      } else {
        console.log('this is where we are');
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

    let invalidUser = {
      facebookID: 5,
      name: 'nick',
      username: 'below',
      email: 'asdfasdf',
      password: 'adfasdf',
      phone: 12345677890,
      fax: 1234567890
    };
  
    // insert correct data into table
    it('should not throw error when validUser is inserted', () => {
      return db.queryAsync('INSERT into USERS SET ?', validUser)
        .then( () => {
          validDataThrowsError = false;
        })
        .error( (err) => {
          validDataThrowsError = true;
        })
        .then( () => {
          expect(validDataThrowsError).to.be.false;
        });
    });
    
    it('should throw an error when inserting invalid data', () => {
      return db.queryAsync('INSERT into USERS SET ?', invalidUser)
        .then ( () => {
          console.log('hello world');
          invalidDataThrowsError = false;
        })
        .error( (err) => {
          console.error(err);
          invalidDataThrowsError = true;
        })
        .then( () => {
          expect(invalidDataThrowsError).to.be.true;
        });

    });
        
  });
});
