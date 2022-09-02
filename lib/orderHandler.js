export const createOrder = async({name, phone, address,quantity, total}) => {
    const res = await fetch('/api/order', {
        method: "POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            quantity: parseFloat(quantity),
            total: parseFloat(total)
        }),
    });
    const id = await res.json();
    return id;
}