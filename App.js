    

const parent = React.createElement('div', {id:'parent'},[
    React.createElement('div',{id:'child'},
    [React.createElement('h1',{},'hello h1 tag'),React.createElement('h2', {},'hello h2 tage'),
    React.createElement('div', {id:'child2'},[React.createElement('h1',{},'h1 tag'),React.createElement('h2',{},'h2 tag')])
    

    ])
    
    

])
         
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);