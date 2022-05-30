let data = [
    {
        name:'matero',
        age:'20'
    },

    {
        name:'sandy',
        age:'20'
    },
    {
        name:'mandy',
        age:'20'
    },
    {
        name:'swech',
        age:'20'
    },
    {
        name:'jonh',
        age:'20'
    },
    {
        name:'appa',
        age:'20'
    },

];

const info = document.querySelector('#info');
let details = data.map(function(item)
{
    return '<div>' + item.name +' '+'is '+ item.age +'</div>';
    
});

info.innerHTML = details.join('\n');
