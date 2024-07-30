const urlParams = new URL(location.href).searchParams;

const externals = urlParams.get('external');

open(externals, '_self');