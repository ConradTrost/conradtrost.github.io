import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";


import * as maskData from '../assets/icons/maskLottie.json';
import * as doneData from '../assets/icons/doneLoading.json';
import Main from '../pages/Main';

const defaultOptions = { 
    loop: true,
    autoplay: true,
    animationData: maskData.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 };


export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: undefined,
        done: undefined
    };
  }

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                this.setState({ loading: true });
                setTimeout(() => {
                    this.setState({ done: true });
                }, 1000);
            });
        }, 1200);
    }

    render() {
        return (
                <div className="main">
                    {!this.state.done ? (
                    <FadeIn>
                        <div className="inline-loading">
                            <h2 className="loading-header">putting mask on...</h2>
                                {!this.state.loading ? (
                                    <Lottie options={defaultOptions} height={120} width={120} />
                                ) : (
                                    <Lottie options={defaultOptions2} height={120} width={120} />
                                )}
                        </div>
                    </FadeIn>
                    ) : (
                        <div className="loaded">
                             <Main />
                        </div>
                    )}
                </div>
        );
      }
    }