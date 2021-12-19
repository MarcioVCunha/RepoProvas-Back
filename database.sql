--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', 'public', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: classes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE classes (
    id integer NOT NULL,
    name text NOT NULL,
    period integer NOT NULL
);


ALTER TABLE classes OWNER TO postgres;

--
-- Name: classes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE classes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE classes_id_seq OWNER TO postgres;

--
-- Name: classes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE classes_id_seq OWNED BY classes.id;


--
-- Name: exams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE exams (
    id integer NOT NULL,
    link text NOT NULL,
    teacher_id integer NOT NULL,
    class_id integer NOT NULL,
    type text NOT NULL,
    name text NOT NULL
);


ALTER TABLE exams OWNER TO postgres;

--
-- Name: exams_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE exams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE exams_id_seq OWNER TO postgres;

--
-- Name: exams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE exams_id_seq OWNED BY exams.id;


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE teachers (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE teachers OWNER TO postgres;

--
-- Name: teachers_classes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE teachers_classes (
    id integer NOT NULL,
    teacher_id integer NOT NULL,
    class_id integer NOT NULL
);


ALTER TABLE teachers_classes OWNER TO postgres;

--
-- Name: teachers_classes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE teachers_classes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE teachers_classes_id_seq OWNER TO postgres;

--
-- Name: teachers_classes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE teachers_classes_id_seq OWNED BY teachers_classes.id;


--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE teachers_id_seq OWNER TO postgres;

--
-- Name: teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE teachers_id_seq OWNED BY teachers.id;


--
-- Name: classes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY classes ALTER COLUMN id SET DEFAULT nextval('classes_id_seq'::regclass);


--
-- Name: exams id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY exams ALTER COLUMN id SET DEFAULT nextval('exams_id_seq'::regclass);


--
-- Name: teachers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teachers ALTER COLUMN id SET DEFAULT nextval('teachers_id_seq'::regclass);


--
-- Name: teachers_classes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teachers_classes ALTER COLUMN id SET DEFAULT nextval('teachers_classes_id_seq'::regclass);


--
-- Data for Name: classes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY classes (id, name, period) FROM stdin;
1	Calc I	1
3	Física I	1
2	Calc II	2
4	Lab de Fisica	2
\.


--
-- Data for Name: exams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY exams (id, link, teacher_id, class_id, type, name) FROM stdin;
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY teachers (id, name) FROM stdin;
1	Pedro
2	Paulo
3	Alex
4	Ana
5	Tereza
\.


--
-- Data for Name: teachers_classes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY teachers_classes (id, teacher_id, class_id) FROM stdin;
1	2	4
2	1	3
3	5	2
4	4	1
5	3	4
6	2	3
7	1	2
8	5	1
9	4	4
10	3	3
11	2	2
12	1	1
\.


--
-- Name: classes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('classes_id_seq', 4, true);


--
-- Name: exams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('exams_id_seq', 12, true);


--
-- Name: teachers_classes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('teachers_classes_id_seq', 12, true);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('teachers_id_seq', 5, true);


--
-- Name: classes classes_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY classes
    ADD CONSTRAINT classes_name_key UNIQUE (name);


--
-- Name: classes classes_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY classes
    ADD CONSTRAINT classes_pk PRIMARY KEY (id);


--
-- Name: exams exams_link_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY exams
    ADD CONSTRAINT exams_link_key UNIQUE (link);


--
-- Name: exams exams_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY exams
    ADD CONSTRAINT exams_pk PRIMARY KEY (id);


--
-- Name: teachers_classes teachers_classes_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teachers_classes
    ADD CONSTRAINT teachers_classes_pk PRIMARY KEY (id);


--
-- Name: teachers teachers_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teachers
    ADD CONSTRAINT teachers_name_key UNIQUE (name);


--
-- Name: teachers teachers_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teachers
    ADD CONSTRAINT teachers_pk PRIMARY KEY (id);


--
-- Name: exams exams_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY exams
    ADD CONSTRAINT exams_fk0 FOREIGN KEY (teacher_id) REFERENCES teachers(id);


--
-- Name: exams exams_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY exams
    ADD CONSTRAINT exams_fk1 FOREIGN KEY (class_id) REFERENCES classes(id);


--
-- Name: teachers_classes teachers_classes_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teachers_classes
    ADD CONSTRAINT teachers_classes_fk0 FOREIGN KEY (teacher_id) REFERENCES teachers(id);


--
-- Name: teachers_classes teachers_classes_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teachers_classes
    ADD CONSTRAINT teachers_classes_fk1 FOREIGN KEY (class_id) REFERENCES classes(id);


--
-- PostgreSQL database dump complete
--
