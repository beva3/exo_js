class Crud{
    constructor(){
        this.clients = [
           {id:1,name:'John',email : 'john@example.com'},
           {id:2,name:'Jane',email : 'jane@example.com'},
           {id:3,name:'Bob',email : 'bob@example.com'}  //... add more clients here
        ]
        this.table_body = document.getElementById('table-body');        
    }
    add(){
        console.log('add client');
        let input_name = document.getElementById('input-name');
        let input_email = document.getElementById('input-email');     
        let add_btn = document.getElementById('add-btn');
        
        
        // add_btn.addEventListener('click',() =>{
            
        //     client.id = this.clients.length + 1;
        //     this.clients.push(client);
        //     this.print()
            
        // });
        // this.clients.push(client);
        // this.print()
    }
    get_row(client){
        return `
            <tr>
                <td>${client.id}</td>
                <td>${client.name}</td>
                <td>${client.email}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            </tr>
        `
    }
    print(){
        console.log('fafao daholo ny eo ambony');
        // this.table_body.innerHTML = ""
        console.log('print clients');
        this.clients.forEach(cl =>{
            this.table_body.innerHTML += this.get_row(cl)
        });
    }
    update(){
        console.log('update client');
    }
}

let crud = new Crud()
crud.print()