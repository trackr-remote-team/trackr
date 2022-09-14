import sqlite3 from 'sqlite3';
import path from 'path';
import fs from 'fs';

sqlite3.verbose();

const dbPath:string = path.resolve(__dirname, '../trackr.db');
const dbExists: boolean = fs.existsSync(dbPath);

const trackrDB = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) throw(err);
  }  
);

if (!dbExists) {
  const createJobSQL = 'CREATE TABLE job (id INTEGER PRIMARY KEY AUTOINCREMENT, position TEXT NOT NULL, company TEXT NOT NULL, outcome TEXT NOT NULL)';
  const createInterviewSQL = 'CREATE TABLE interview (id INTEGER PRIMARY KEY AUTOINCREMENT, job_id INTEGER, type TEXT NOT NULL, date DATE, FOREIGN KEY (job_id) REFERENCES job (id))';
  const createCommentSQL = 'CREATE TABLE comment (id INTEGER PRIMARY KEY AUTOINCREMENT, job_id INTEGER, interview_id INTEGER, note TEXT NOT NULL, FOREIGN KEY (job_id) REFERENCES job (id), FOREIGN KEY (interview_id) REFERENCES interview (id))';

  trackrDB.run(createJobSQL, (err) => {
    if (err) {
      console.log(err);
      throw (err);
    }
    trackrDB.run(createInterviewSQL, (err) => {
      if (err) {
        console.log(err);
        throw (err);
      }
      trackrDB.run (createCommentSQL, (err) => {
        if (err) {
          console.log(err);
          throw (err);
        }
        console.log('Successfully created job, interview, and comment tables');
      });
    });
  });
}

export default trackrDB;