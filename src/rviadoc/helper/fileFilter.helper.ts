export const filesFilter = ( req: Express.Request, file: Express.Multer.File, callback: Function ) => {

    if (!file) return callback(new Error('File is empty'), false);


    const name = file.originalname.split('.');
    const ext = name[name.length - 1].toLowerCase();
    
    // Verifica que sea un archivo PDF
    if (file.mimetype === 'application/pdf' && ext === 'pdf') {
      return callback(null, true); // Acepta el archivo si es un PDF válido
    }
    
    // Rechaza el archivo si no es un PDF
    callback(null, false);
}
