import styles from "./dashboard.module.css";
import JobLocation from "./Charts/JobLocation";
function DashBoard() {
  const data = [
    {
      id: 1,
      title: "Total Revenue",
      revenue: "$406411.29",
      color:"gray"
    },
    {
      id: 2,
      title: "Total Jobs Avg",
      revenue: 620,
    },
    {
      id: 3,
      title: "Tickets created",
      revenue: 655,
    },
    {
      id: 4,
      title: "Tickets Scheduled",
      revenue: 735,
    },
    {
      id: 5,
      title: "Outstanding amount",
      revenue: "$110448.8",
      color:"orange"
    },
    {
      id: 6,
      title: "Membership sold",
      revenue: 105,
    },
    {
      id: 7,
      title: "Jobs completed",
      revenue: 436,
    },
    {
      id: 8,
      title: "Total canceled",
      revenue: 65,
    },
  ];
  const chartData = [
    {
        "title":"Revenue By Job Location",
        "x":[100000, 90000, 49000, 48000, 42000, 32000],
        "y":["Everett","Seattle","Lynnwood","Bothell","Mukilteo","Edmonds"]
    },
    {
        "title":"Revenue By Job Type",
        "x":[190000, 130000, 79000, 78000, 45000,42000],
        "y":['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale']
    }
  ]
  return (
    <div className={styles.container}>
      <h4 className={styles.company}>Company Metrics</h4>
      <div className={styles.metrics}>
        {data.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <p className={styles.price}>{item.revenue}</p>
              <p className={styles.title}>{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.chartContainer}>
        {
            chartData.map(chart => {
                return(
                    <div className={styles.charts}>
                        <h4>{chart.title}</h4>
                        <div className={styles.chart}>
                        <JobLocation x={chart.x} y={chart.y} />
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default DashBoard;
