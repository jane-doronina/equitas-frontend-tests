import {useState, useEffect, useRef} from "react";
import {Container, Pagination, CircularProgress} from "@mui/material";

import Launches from "./components/Launches";
import Banner from "./components/Banner";
import './App.css';

function App() {
    const containerRef = useRef(null);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const apiUrl = 'https://api.spacexdata.com/v4/launches/query';

    function getQueryBody(pageNumber) {
        return  {
            query: {
                upcoming: false,
                success: true
            },
            options: {
                page: pageNumber,
                select: {
                    id: 1,
                    name: 2,
                    links: 3,
                    date_utc: 4,
                    flight_number: 5,
                },
                populate: [
                    {
                        path: 'rocket',
                        select: {
                            id: 1,
                            name: 2,
                            type: 3,
                            description: 4,
                            height: 5,
                            diameter: 6,
                            mass: 7,
                            flickr_images: 8,
                        },
                    },
                    {
                        path: 'crew',
                        select: {
                            id: 1,
                            name: 2,
                            agency: 3,
                            image: 4,
                        },
                    },
                    {
                        path: 'payloads',
                        select: {
                            id: 1,
                            name: 2,
                            type: 3,
                            orbit: 4,
                            reference_system: 5,
                            regime: 6
                        }
                    },
                    {
                        path: 'capsules',
                        select: {
                            id: 1,
                            type: 2,
                            status: 3,
                            serial: 4
                        }
                    },
                    {
                        path: 'launchpad',
                        select: {
                            id: 1,
                            name: 2,
                            full_name: 3,
                            locality: 4,
                            region: 5,
                            latitude: 6,
                            longitude: 7,
                            details: 8
                        }
                    }
                ],
                sort: {
                    flight_number: 'desc',
                },
            },
        };

    }

    const fetchData = async (pageNumber) => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(getQueryBody(pageNumber)),
            });

            if (!response.ok) {
                console.log('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData)
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handleChange = (event, value) => {
        setCurrentPage(value); // set the current page
        containerRef.current.scrollIntoView({ behavior: 'smooth' }); // scroll to the top of the container
    };

    return (
        <section className="mainSection">
            <Banner total={data["totalDocs"]}/>
            <Container ref={containerRef} fixed sx={{pt: 2, pb: 5}}>
                {data["docs"] ? (
                    <div className="wrapper">
                        <Launches launches={data["docs"]}/>
                        <Pagination
                            onChange={handleChange}
                            count={data["totalPages"]}
                            color="primary"
                            sx={{mt: 8, mb: 5}}
                            className="pagination"
                        />
                   </div>
                ) : (
                    <div className="wrapper"><CircularProgress /></div>
                )}

            </Container>
            <div className="bgBottom">
                <div className="horizontalLine horizontalLineBottom">
                    <div className="circle"></div>
                </div>
                <div className="verticalLine verticalLineBottom"></div>
            </div>

        </section>
    );
}
export default App;
