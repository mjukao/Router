import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom'; 
import { addProduct, removeProduct } from '../features/productSlice'; 

function Products() { 
  const dispatch = useDispatch(); 
  const productList = useSelector((state) => state.products);

  // States to store input values
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [position, setPosition] = useState('');

  const handleAddProduct = () => { 
    if (!name || !salary || !position) {
      alert("Please fill in all fields.");
      return;
    }

    // Dispatch new product with additional fields
    dispatch(addProduct({ 
      id: productList.length + 1, 
      name: name, 
      salary: salary, 
      position: position, 
      description: 'New employee added' 
    }));

    // Clear the input fields
    setName('');
    setSalary('');
    setPosition('');
  }; 

  const handleRemoveProduct = (id) => { 
    dispatch(removeProduct(id)); 
  }; 

  return ( 
    <div> 
      <h2>Employee List</h2> 
      <ul> 
        {productList.map(product => ( 
          <li key={product.id}> 
            <Link to={`/product/${product.id}`}> 
              {product.name} - {product.salary} - {product.position} 
            </Link> 
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button> 
          </li> 
        ))} 
      </ul> 

      <h3>Add New Employee</h3> 
      <div>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        /> 
        <input 
          type="text" 
          placeholder="Salary" 
          value={salary} 
          onChange={(e) => setSalary(e.target.value)} 
        /> 
        <input 
          type="text" 
          placeholder="Position" 
          value={position} 
          onChange={(e) => setPosition(e.target.value)} 
        />
        <button onClick={handleAddProduct}>Add Employee</button> 
      </div> 
    </div> 
  ); 
} 

export default Products;
