type BannerProps = {
  days: string;
  hours: string;
  mins: string;
  seconds: string;
};

function CountDownBanner({ days, hours, mins, seconds }: BannerProps) {
  return (
    <div>
      <div>
        <p>{days}</p>
        <p>days</p>
      </div>
    </div>
  );
}

export default CountDownBanner;
