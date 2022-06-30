import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const ScoreView = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    const { data } = await axios.get('https://inggo-be.herokuapp.com/pre-test');
    setData(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="p-5" style={{ minHeight: '75vh' }}>
      <Table>
        <thead>
          <tr>
            <td>No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td className="text-center">Listening Score</td>
            <td className="text-center">Reading Score</td>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.notelp}</td>
                <td className="text-center">{item?.listening}</td>
                <td className="text-center">{item?.reading}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ScoreView;
