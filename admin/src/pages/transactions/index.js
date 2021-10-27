/**
 * External dependencies
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

/**
 * Internal dependencies
 */
import { TRANSACTIONS, NAMESPACE } from "../../constants";
import TableComp from "../table";
// import { useFetch } from "../../hooks";

const Transactions = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const heading = [
    "Customer",
    "Amount",
    "Customer full name",
    "status",
    "Date",
  ];
  // const getTransactionLists = () => {};
  const url = `${flutterwave_data.apiUrl}${NAMESPACE + TRANSACTIONS}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      const { ...data } = res.data.data;
      let arr = [];
      Object.keys(data).forEach(function (key) {
        arr.push(data[key]);
      });
      setTransactions(arr);
      setLoading(false);
    });
  }, []);

  return (
    <React.Fragment>
      <div>
        {transactions.length == 0 && (
          <h4 className="no-plan-text">
            <span className="planheading">
              You currently do not have any transactions yet,
            </span>
            <br />
            <span className="planheading">but you can change that.</span>
          </h4>
        )}
        <br />
        {transactions.length == 0 && (
          <button
            style={{
              backgroundColor: "#F5A623",
              height: "56px",
              width: "276.3333435058594px",
              left: "203px",
              top: "326px",
              borderRadius: "4px",
              padding: "17px, 32px, 17px, 32px",
              border: "none",
              marginTop: "2em",
            }}
            onClick={() => console.log("test page")}
          >
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "22px",
                letterSpacing: "0.002400000113993883px",
                textAlign: "center",
              }}
            >
              Create a transaction
            </span>
          </button>
        )}

        {transactions.length > 0 && (
          <TableComp head={heading} data={transactions} type={"transactions"} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Transactions;
