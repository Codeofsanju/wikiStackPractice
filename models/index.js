const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistackself', {logging:true});

const Page = db.define('pages', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: { 
        type:Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: Sequelize.ENUM('open', 'closed')
});

// CANNOT SET HEADER AFTER THEY ARE SENT TO CLIENT ERROR
const slugGenerator = (title) =>{
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
};


Page.beforeCreate((instance, options)=>{
    instance.slug = slugGenerator(instance.title);
});


const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

module.exports = {
    db,
    Page,
    User
};