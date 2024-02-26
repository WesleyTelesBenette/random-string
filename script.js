
function randomizeString(string, amount)
{
    let arrayResponse = [];
    let amonuntCount = amount;
    let loop = true;
    
    while (amonuntCount > 0)
    {
        const characters = string.split('');

        while (loop)
        {
            loop = false;

            for (let c = 0; c < characters.length; c++)
            {
                let arrayAllStrings = arrayResponse.concat(string);

                for (let cc = 0; cc < arrayAllStrings.length; cc++)
                {
                    const stringCurrent = arrayAllStrings[cc].split('');

                    if (stringCurrent[c] == characters[c])
                    { 
                        const charIndex = Math.floor(Math.random() * (string.length + 1));
                        [characters[c], characters[charIndex]] = [characters[charIndex], characters[c]];
                        break;
                    }
                }
            }

            for (let c = 0; c < arrayResponse.length; c++)
            {
                const stringCurrent = arrayResponse[c].split('');
    
                for (let cc = 0; cc < characters.length; cc++)
                {
                    if (stringCurrent[cc] == characters[cc])
                    {
                        loop = true;
                    }
                }
            }
        }

        arrayResponse.push(characters.join(''));
        loop = true;
        amonuntCount--;
    }

    return arrayResponse;
}

function testeScript()
{
    let charactersPossibles = " abcdefghijklmnopqrstuvwxyzáàãâéèêíìîóòôõúùûçABCDEFGHIJKLMNOPQRSTUVWXYZÁÀÃÂÉÈÊÍÌÎÓÒÔÕÚÙÛÇ1234567890<>,.:;/\\\'\"!@#$%§¨&|*()-_=+`´{}[]ªº?°\n";

    const stringsRandom = randomizeString(charactersPossibles, 50);
    
    stringsRandom.forEach(string => {
        console.log(string + "\n\n");
    });
}

testeScript();
