ALTER TABLE notes 
    ADD COLUMN
        folder_id INTEGER REFERENCES folders(id)
        ON DELETE SET NULL;