import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Paper, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const Embedding = () => {
    const { routeName } = useParams(); // Get routeName from URL params
    const [htmlContent, setHtmlContent] = useState(null); // Store HTML content
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track errors if any
    const token = useSelector(state => state.profile.jwt);

    useEffect(() => {
        const fetchEmbeddedHtml = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/embedded-html/routeName/${routeName}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });
                setHtmlContent(response.data.descriptionHtml); // Set the HTML content
            } catch (err) {
                setError("Failed to load content.");
            } finally {
                setLoading(false);
            }
        };

        fetchEmbeddedHtml();
    }, []); // Fetch again when routeName changes

    if (loading) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Paper style={{ padding: '10px', marginTop: '20px', boxShadow: 'none', border: 'none' }}>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </Paper>
        </Container>
    );
};

export default Embedding;
