class Crud{
    constructor(){
        this.client = []
    }
    add(){
        
        this.update()
        this.print()
    }
    print(){
        console.log('print clients');
    }
    update(){
        console.log('update client');
    }
}

let crud = new Crud()
crud.add()