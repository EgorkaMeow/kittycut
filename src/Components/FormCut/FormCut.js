import React from 'react';
import './FormCut.css';
import logo from './logo.svg';

class FormCut extends React.Component {
    state = {
        url: '',
        show_cut_url: false,
        cut_url: '',
    }

    handleChangeInputValue = (e) => {
        this.setState({
            url: e.target.value,
        });
    }

    createLink = async (e) => {
        e.preventDefault();
        if(this.validateURL(this.state.url)){
            const response = await fetch('/backend/index.php', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                body: {
                    action: 'create_link',
                    link: this.state.url,
                }
            });
            console.log(response);
            this.setState({
                show_cut_url: true,
                cut_url: response,
            })
        }
        else {
            alert('Неправильный url!')
        }
    }

    selectCutUrl = (e) => {
        e.target.select();
    }

    validateURL = (textval) => {
        // eslint-disable-next-line
        var urlregex = new RegExp('^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$', 'gi');
        
        // eslint-disable-next-line
        var urlregex2 = new RegExp('^([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$', 'gi');
        return urlregex.test(textval) || urlregex2.test(textval);
    }

    closeResult = () => {
        this.setState({ show_cut_url: false });
    }

    render() {
        return (
            <>
                <div className="form-block">
                    <form onSubmit={this.createLink}>
                        <img src={logo} alt="kittycut" />
                        <div className="input-item">
                            <input type="text" name="original_link" value={this.state.url} onChange={this.handleChangeInputValue} placeholder="URL" />
                            <button>&#10004;</button>
                        </div>
                    </form>
                    <div className="cut_result" style={{ display: this.state.show_cut_url ? 'flex': 'none'}}>
                        <span onClick={this.closeResult}>&#10006;</span>
                        <input type="text" name="cut_link" value={this.state.cut_url} onClick={this.selectCutUrl} readOnly />
                    </div>
                </div>
            </>
        );
    }
}

export default FormCut;