class TestModel {
  constructor(db) {
    this.db = db;
  }

  getAll(callback) {
    this.db.query("SELECT * FROM test", callback);
  }

  getById(id, callback) {
    this.db.query("SELECT * FROM test WHERE id = ?", [id], callback);
  }

  create(data, callback) {
    const { nom, age, email } = data;
    this.db.query(
      "INSERT INTO test (nom, age, email) VALUES (?, ?, ?)",
      [nom, age || null, email],
      callback
    );
  }

  update(id, data, callback) {
    const { nom, age, email } = data;
    this.db.query(
      "UPDATE test SET nom = ?, age = ?, email = ? WHERE id = ?",
      [nom, age, email, id],
      callback
    );
  }

  delete(id, callback) {
    this.db.query("DELETE FROM test WHERE id = ?", [id], callback);
  }
}

module.exports = TestModel;
