import MainHeader from "../../components/header/MainHeader";
import HeaderStub from "../../components/header/HeaderStub";
import PostForm from "../../components/feed/PostForm";
import React from "react";
import Api from "../../utils/Api";

class PostCreationScreen extends React.Component{

    state = {
        formIsFilled: false,
        title: null,
        text: null,
        errorMsg: null
    };

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    async onFormSubmit(){
        this.setFormFilled(true)

        if(this.state.formIsFilled){
            Api.create_bulletin(this.getBulletinInfo(),
                ((response) => {
                    if(response.status === 201){
                        window.location.href='/bulletins';
                    }
                }),
                ((error) => {
                        this.setState({errorMsg: error.response.data.errors[0].defaultMessage})
                }))
        }
    }

    getBulletinInfo(){
        let bulletinInfo = {}
        Object.assign(bulletinInfo, this.state.title)
        Object.assign(bulletinInfo, this.state.text)
        return bulletinInfo;
    }

    setFormFilled(isFilled){
        this.setState({formIsFilled: isFilled});
    }

    render() {
        return (
            <div>
                <MainHeader createIsVisible={false}/>
                <HeaderStub/>
                <div>
                    <PostForm
                        onSubmit={this.onFormSubmit}
                        errorMsg={this.state.errorMsg}
                        titleName={'Создание объявления'}
                        buttonName={'Создать'}/>
                </div>
            </div>
        );
    }
}

export default PostCreationScreen;
