const API_URL = 'http://localhost:3030';

const FoodService = async (name,price,restaurant) => {
    try {
        const response = await fetch (`${API_URL}/dishes/newUser`, {
            method: 'POST',
            body: JSON.stringify({ 
                    name,
                    price,
                    restaurant
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

export default FoodService;