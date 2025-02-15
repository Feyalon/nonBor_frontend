import React from "react";

const tags = [
  "Nonvoyxonalar",
  "Samarqand non",
  "Qo'qon patir",
  "Shirmoy non",
  "So'qoq somsa",
  "Sanjar patir",
];

const TagList: React.FC = () => {
  return (
    <div className="tag-list">
      <h2>Mashhurlar</h2>
      <div className="tags">
        {tags.map((tag, index) => (
          <button key={index} className="tag-button">
            #{tag}
          </button>
        ))}
      </div>
      <div className="filter-buttons">
        <button className="filter-button">
          <img
            src="https://s3-alpha-sig.figma.com/img/22e0/0879/a85efda8b74fe23708340958ecb9ac75?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c37Yc-rZSTl7aJP3muqXN7K1mpl5mE1gPKef5kAfTPE21VYPwtIwWvx3taj0tY5IW5stuXWU5Vd1Re9yaFVyb6CVtSo4FG8BscIzIUEa9ELKlxYuxWZaNyBOZJx8~fjJYNEEliHxaK5Fc3BJQupgvfuTRnyNj2nYDbRZVcEaV2FYDonoJLP9IMyMX67h-Jkys87VBFQxdm~e44LbKtugMxO~-xhYFe83sxy~uK5ShYT6kTdwZl3HQXr5SljtXKYCoEg0xZbVMeutMMv7NQ6fXP1JuyHmLr4kfMQrrAeOhntYsSLvTPBvSW7-35k1xukX8AVvVTXIiWarbiclP41nvQ__"
            alt="Sort"
          />
          Saralash
        </button>
        <button className="filter-button">
          <img
            src="https://s3-alpha-sig.figma.com/img/2446/27f7/5012f061777cfe138817759b77d52a60?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gOmlLYSIBFnP2iiMVvR7Eg4Xy7vWQPNQneHq5U4rEU1s1qpDw5sHs~pb481zQQ4NeW-HZ78m2LRT0blpqJaJnramSFzbCeUc~PYxZU7ZUnwvhfM3kblVrsJDWGzTjZVmBtFcUOzh3U3EQrS1krULPnOz5KxW2WyRf9Cgs~6RU-~m7BH3Cn0ATsOvQc9lcUYpDvAgYWAYsyIiJ-6NlGI8mV1nRXAH8MQHZyHxBf3B0Vp4NO94EWqRPozfHG5WHtZG7-qMchP18hnk5KOzY9GkgnFMylVbSU70UPwnqwlCsV0UnUW0U0BXsEgSNMVMr29TTBjqf34U8i~GV6pozbs-Jg__"
            alt="Filter"
          />
          Filterlash
        </button>
      </div>
    </div>
  );
};

export default TagList;
