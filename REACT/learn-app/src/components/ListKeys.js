// const numbers = [1,2,3,4,5];
// const double =  numbers.map((num)=> num * 2);
// console.log(double);
function Blog(props) {
    console.log(props.userData);
    const sideBar = (
        <ul>
            { 
                props.userData && props.userData.length !== 0 && props.userData.map((user) =>
                    <li key={user.id}>{user.firstName}{user.lastName}</li>
                )
            }
        </ul>
    );
    const content = props.userData && props.userData.length !== 0 &&  props.userData.map((user) =>
        <div key={user.id}>
            <h3>{user.firstName}</h3>
            <p>{user.lastName}</p>
        </div>
    )
    return (
        <div>
            {sideBar}
            <hr />
            {content}
        </div>
    );
}

export default Blog;