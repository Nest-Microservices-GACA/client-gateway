import { v4 as uuidv4 } from 'uuid';

export const fileTempName = ( req: Express.Request, file: Express.Multer.File, callback: Function ) => {

    if ( !file ) return callback( new Error('File is empty'), false );

    const name = file.originalname.split('.');
    const ext = name.pop();
    const folderName = name.join('.').replace(/\s+/g, '-');
  
    const fileName = `${ uuidv4() }.${ folderName }.${ext}`; 

    callback(null, fileName );
}
