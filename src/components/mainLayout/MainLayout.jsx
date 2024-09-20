import mainLayoutStyles from './MainLayout.module.css';

function MainLayout(props) {

  return (
    <div className={mainLayoutStyles['main-layout']}>{props.children}</div>
  );
};

export default MainLayout;
