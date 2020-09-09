import React from 'react';
import './Page.css';

class Page extends React.Component {
    componentWillMount = async () => {
        let data = new FormData();
        data.append('action', 'get_link');
        data.append('link', 'kittycut.tk' + window.location.pathname);

        const response = await fetch('http://localhost/backend/index.php', {
            method: 'POST',
            body: data
        });

        if(response.status == 200){
            let result = await response.json();
            if(result.status == 'ok'){
                window.location.href = 'http://' + result.link;
            }
            else {
                window.location.href = "/";
            }
        }
        else {
            window.location.href = "/";
        }
    }

    render(){
        return (<section>Redirecting...</section>);
    }
};

export default Page;