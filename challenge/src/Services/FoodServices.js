const API_URL = 'http://localhost:8080';

const FoodService = async (username,password,confirmPassword) => {
    try {
        const response = await fetch (`${API_URL}/dishes/newUser`, {
            method: 'POST',
            body: JSON.stringify({ 
                    username,
                    password,
                    confirmPassword
             })
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        return {
            error: true,
            message: "Can't connect with server"
        };
    }
}

export default UserService;