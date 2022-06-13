const Avatar = ({
    avatar,
    size,
}) => {
    const style = {
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
    };

    return (
        <img
            src={avatar}
            style={style}
            alt="avatar"
        />
    );
}

export { Avatar }




























































