import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Phil',
        email: 'philipwalsh.ds@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jane doe',
        email: 'jane.doe@philwalsh.com',
        password: bcrypt.hashSync('123456', 10)

    },
    {
        name: 'John doe',
        email: 'john.doe@philwalsh.com',
        password: bcrypt.hashSync('123456', 10)
    },

]

export default users;
