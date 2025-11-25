import React from 'react';
import useCountdown from '@/hooks/useCountdown';

const Timer = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="row text-center">
          <div className="col-6 col-lg-3">
            <div className="card shadow">
              <div className="card-body p-2">
                <h3 className="mb-1 fs-24">{days}</h3>
                <p className="mb-0 text-muted">Days</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card shadow">
              <div className="card-body p-2">
                <h3 className="mb-1 fs-24">{hours}</h3>
                <p className="mb-0 text-muted">Hours</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card shadow">
              <div className="card-body p-2">
                <h3 className="mb-1 fs-24">{minutes}</h3>
                <p className="mb-0 text-muted">Minutes</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card shadow">
              <div className="card-body p-2">
                <h3 className="mb-1 fs-24">{seconds}</h3>
                <p className="mb-0 text-muted">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;