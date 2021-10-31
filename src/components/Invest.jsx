import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useHistory } from 'react-router';
import {useAuth} from '../context/AuthContext';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Invest = ({ simplified }) => {
  const {logout,currentUser} = useAuth()
    const history = useHistory()
    const [error, setError] = useState('')
    // logout
    async function handleLogout() {
      setError('')
      try {
          await logout()
          history.push("/login")
      }
      catch{
          setError('failed to log out')
      }
    } 
    // check if user is logged in or not
    useEffect(() => {
      if(currentUser) {
        history.push('/invest')
      }
      else {
        history.push('/login')
      }
    },[])

    
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
    <button onClick = {()=> handleLogout()} className = "py-2 px-4 bg-blue-400 text-black">Logout</button>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link key={currency.id} to={`/crypto/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable>
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Invest;
