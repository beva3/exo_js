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
        let input_name = document.getElementById('name-input');
        let input_email = document.getElementById('email-input');     
        let add_btn = document.getElementById('add-btn');
        
        
        add_btn.addEventListener('click',() =>{

            let client = {
                name: input_name.value.trim(),
                email: input_email.value.trim() 
            }
            if(client.name === '' || client.email === ''){
                alert("Please enter a name and email.");
            }
            else {
                client.id = this.clients.length + 1;
                this.clients.push(client);
                this.print()
                input_name.value = '';
                input_email.value = '';
            }
        });
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
    edit(client){
        let edit_btn =document.querySelectorAll('.edit-btn');
        console.log(edit_btn);
        for(let i = 0; i < edit_btn.length; i++){
            edit_btn[i].addEventListener('click',() =>{
                console.log(edit_btn[i]);
                
            })
        }
        
        console.log('edit client');
        //... edit client data
    }
    print(){
        // console.log('fafao daholo ny eo ambony');
        this.update()
        console.log('print clients');
        this.clients.forEach(cl =>{
            this.table_body.innerHTML += this.get_row(cl)
        });
    }
    update(){
        console.log('update client');
        this.table_body.innerHTML = ""
    }
    execute(){
        this.add();
        this.edit();
        this.print();
    }

}

let crud = new Crud()
crud.execute()