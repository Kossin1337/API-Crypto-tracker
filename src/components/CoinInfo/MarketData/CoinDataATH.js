export function CoinDataATH({ ath, athPercentage }) {
  const athPercentageIndicator = athPercentage > 0 ? "green" : "red";
  return (
    <div className="all-time-high-info">
      <h4 className="ath-title">All time high (ATH)</h4>
      <div className="ath-text-field">
        <h3>{ath.usd}$</h3>
        <p id="ath-percentage" className={athPercentageIndicator}>
          {athPercentage.usd.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}
