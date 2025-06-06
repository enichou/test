import { FunctionComponent } from "react";
import styles from "./BuyerMaintenance.module.css";

const BuyerMaintenance: FunctionComponent = () => {
  return (
    <div className={styles.buyerMaintenance}>
      <div className={styles.buyerMaintenanceChild} />
      <div className={styles.frameParent}>
        <div className={styles.wereTakingOutOfForMainteWrapper}>
          <b className={styles.wereTakingOut}>
            We're taking out of for Maintenance
          </b>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.maintenanceImplementationDatWrapper}>
            <b className={styles.maintenanceImplementationDat}>
              Maintenance implementation date and time
            </b>
          </div>
          <b className={styles.monthDdYyyy}>
            Month DD, YYYY HH:MM (JST) - Month DD, YYYY HH:MM (JST)
          </b>
          <div className={styles.pleaseNoteThatTheScheduleWrapper}>
            <div className={styles.pleaseNoteThat}>
              Please note that the schedule may change slightly depending on the
              progress of the work.
            </div>
          </div>
        </div>
        <div className={styles.thankYouForUsingShippasOWrapper}>
          <div className={styles.thankYouForContainer}>
            <p
              className={styles.thankYouFor}
            >{`Thank you for using Shippas. Our service is temporarily unavailable due to system maintenance. `}</p>
            <p className={styles.thankYouFor}>
              We apologize for any inconvenience this may cause and appreciate
              your understanding and cooperation.
            </p>
          </div>
        </div>
      </div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.shipimage}>
        <div className={styles.frameContainer}>
          <img className={styles.frameChild} alt="" src="/frame-25.svg" />
          <img className={styles.frameItem} alt="" src="/frame-35@2x.png" />
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild10} />
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild21} />
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frameChild32} />
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                </div>
              </div>
              <img className={styles.frameIcon} alt="" src="/frame-14.svg" />
              <div className={styles.frameParent3}>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild54} />
                  <div className={styles.frameChild55} />
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild56} />
                  <div className={styles.frameChild57} />
                  <div className={styles.frameChild58} />
                  <div className={styles.frameChild59} />
                  <div className={styles.frameChild60} />
                </div>
                <div className={styles.rectangleParent5}>
                  <div className={styles.frameChild61} />
                  <div className={styles.frameChild62} />
                  <div className={styles.frameChild63} />
                  <div className={styles.frameChild64} />
                  <div className={styles.frameChild65} />
                  <div className={styles.frameChild66} />
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild67} />
              <div className={styles.frameChild68} />
              <div className={styles.frameChild69} />
              <div className={styles.frameChild70} />
              <div className={styles.frameChild71} />
            </div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.rectangleParent7}>
            <div className={styles.frameChild72} />
            <div className={styles.frameChild73} />
            <div className={styles.frameChild74} />
            <div className={styles.frameChild75} />
          </div>
          <div className={styles.rectangleParent8}>
            <div className={styles.frameChild72} />
            <div className={styles.frameChild73} />
            <div className={styles.frameChild74} />
            <div className={styles.frameChild75} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerMaintenance;
