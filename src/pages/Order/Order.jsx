import React, { useContext, useEffect, useState } from 'react'
import classes from './order.module.css'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { db } from '../utilities/firebase';

const Order = () => {
  const [{ user }] = useContext(DataContext);
  const [Orders, setOrders] = useState([]);
  useEffect(()=>{
    if(user){
      db.collection('users').doc(user.uid).collection('orders').orderBy('created', 'desc').onSnapshot((snapshot)=>{
        setOrders(snapshot.docs.map((docs)=>({
            id: docs.id,
            data: docs.data() }
        )))
    })
    }else{
      setOrders([])
    }

  },[])
  console.log(Orders);
  return (
    <>
      <Layout>
        <section className={classes.container}>
          <div className={classes.order_container}>
            <h2>Your Orders</h2>
            {Orders?.length == 0 && (
              <div
                style={{
                  padding: "30px",
                  textAlign: "center",
                  fontWeight: "300",
                }}
              >
                You have no Orders!
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Order
