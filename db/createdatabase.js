//Tables created in POSTGRES

//CREATE TABLE users (userid BIGSERIAL NOT NULL PRIMARY KEY, email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL, major VARCHAR(100) NOT NULL);

// USE master;
// CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'gfe9787GY_09'; 

// CREATE CERTIFICATE usersUA WITH SUBJECT = 'UA User Info';  

// CREATE SYMMETRIC KEY et1lhaets9  
//     WITH ALGORITHM = AES_256  
//     ENCRYPTION BY CERTIFICATE usersUA;  

// -- Create a column in which to store the encrypted data.  
// ALTER TABLE users   
//     ADD EncryptedEmail VARBINARY(256), 
//         EncryptedPassword VARBINARY(256), 
//         EncryptedMajor VARBINARY(256);

// ALTER TABLE courserecs   
//     ADD EncryptedRecString VARBINARY(256);

// ALTER TABLE interestresults   
//     ADD EncryptedSummString VARBINARY(256);

// ALTER TABLE fouryearplan   
//     ADD EncryptedPlanString VARBINARY(256);

// -- Open the symmetric key with which to encrypt the data.  
// OPEN SYMMETRIC KEY et1lhaets9  
//    DECRYPTION BY CERTIFICATE usersUA;  

// -- Encrypt the value in column CardNumber using the  
// -- symmetric key CreditCards_Key11.  
// -- Save the result in column CardNumber_Encrypted. 

// -- REPLACE ID_SLOT WITH THE ID COLUMN
// UPDATE users  
// SET EncryptedEmail = EncryptByKey(Key_GUID('et1lhaets9'), email, 1, HASHBYTES('SHA2_256', CONVERT( varbinary, ID_SLOT))), 
//     EncryptedPassword = EncryptByKey(Key_GUID('et1lhaets9'), password, 1, HASHBYTES('SHA2_256', CONVERT( varbinary, ID_SLOT))), 
//     EncryptedMajor = EncryptByKey(Key_GUID('et1lhaets9'), major, 1, HASHBYTES('SHA2_256', CONVERT( varbinary, ID_SLOT)));

// UPDATE courserecs  
// SET EncryptedRecString = EncryptByKey(Key_GUID('et1lhaets9'), courserecstring, 1, HASHBYTES('SHA2_256', CONVERT( varbinary, userid))); 

// UPDATE interestresults  
// SET EncryptedSummString = EncryptByKey(Key_GUID('et1lhaets9'), interstsumarystring, 1, HASHBYTES('SHA2_256', CONVERT( varbinary, userid)));

// UPDATE fouryearplan  
// SET EncryptedPlanString = EncryptByKey(Key_GUID('et1lhaets9'), planstring, 1, HASHBYTES('SHA2_256', CONVERT( varbinary, userid)));


// ALTER TABLE users DROP COLUMN email;
// ALTER TABLE users DROP COLUMN password;
// ALTER TABLE users DROP COLUMN major;

// ALTER TABLE courserecs DROP COLUMN courserecstring;

// ALTER TABLE interestresults DROP COLUMN interstsumarystring;

// ALTER TABLE fouryearplan DROP COLUMN planstring;