import './MainLayout.css';

function MainLayout(props) {

    return (
        <div className={'main-layout'}>{props.children}</div>
    );
};

export default MainLayout;
