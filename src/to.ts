const to = promise => promise
    .then(result => [null, result])
    .catch(error => [error]);

export default to;
