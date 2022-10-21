// Code your solutions in this file
function writeCards(names,message)
{
    const result = [];
    for(let i=0;i<names.length;i++)
    {
        result.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
    }
    return result;
}

function countDown(count)
{
    for(let i =count; i>=0;i--)
    {
        console.log(i)
    }
}