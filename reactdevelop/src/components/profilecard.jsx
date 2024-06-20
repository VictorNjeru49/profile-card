

const Profilecard = ({name, age, bio, profilepicture})=>{
    return(
        <div className="selections">
            <img src={profilepicture} alt={name} className="image-wrapper" />
            <h1>{name}</h1>
            <h2>Information</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}
export default Profilecard