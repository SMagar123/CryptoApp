import React from "react";
import "../styles/about.css";
import about from "../images/aboutImage.jpg";
const AboutPage = () => {
  return (
    <div className="aboutWrapper">
      <div className="aboutImage">
        <img src={about} alt="aboutimage" />
      </div>
      <div className="aboutDescription">
        <h1>Blockchain</h1>
        <p>
          Blockchain is a decentralized, distributed ledger technology that
          allows for secure and transparent record-keeping of digital
          transactions. It was first introduced in 2008 as the underlying
          technology behind the digital currency Bitcoin, but its potential
          applications extend beyond cryptocurrencies. A blockchain consists of
          a chain of blocks, where each block contains a collection of
          transactions that have been validated by a network of users or
          computers (nodes) and added to the chain in a chronological order.
          Each block also contains a unique cryptographic hash, which links it
          to the previous block in the chain, creating a secure and tamper-proof
          record of all the transactions. The decentralized nature of blockchain
          means that there is no need for a centralized intermediary, such as a
          bank, to validate transactions. Instead, all nodes on the network work
          together to validate transactions and maintain the integrity of the
          blockchain. This makes blockchain a highly secure and transparent
          technology, as all transactions are recorded on the blockchain and can
          be easily audited. Blockchain has many potential applications, from
          financial services and supply chain management to healthcare and
          identity verification. It has the potential to transform the way we
          conduct transactions and manage data, making them more secure,
          efficient, and transparent.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
