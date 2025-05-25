function Activity1({userName,textColor}){
    let styles = {color : textColor};
    return(
       <div>
            <h1 style={styles}>Welcome Back! {userName}</h1>
       </div>
    );
}
export default Activity1;