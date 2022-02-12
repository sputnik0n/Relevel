let obj =[ {
    Id: 45,
    Name: 'ram',
    },{
    Id: 4,
    Name: 'raju',
    },{
    Id: 90,
    Name: 'kumar'
    }];

    console.log(obj.sort(compareId));

    function compareId(a, b){
        return a.Id - b.Id;
    }