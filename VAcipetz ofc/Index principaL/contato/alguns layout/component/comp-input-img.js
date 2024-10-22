function inicializarInputImg(compFoto){
    const imgPreview = compFoto.querySelector('img');
    const inputFile = compFoto.querySelector('input');

    inputFile.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            
            const reader = new FileReader();
            reader.addEventListener('load', (eLoad) => {
                imgPreview.setAttribute('src', eLoad.target.result);
            })
            reader.readAsDataURL(file);
            return;
        }
    });
}