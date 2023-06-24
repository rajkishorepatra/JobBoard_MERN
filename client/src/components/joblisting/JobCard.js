import React,{useState} from 'react'
import { Card, Grid, Text, Badge, Input, Button, Modal, useModal } from "@nextui-org/react";


function JobCard() {
    const[name, setName] = useState(""); 
    const[email, setEmail] = useState(""); 
    const[num, setNum] = useState(""); 
    const[url, setUrl] = useState("");
    const obj={
       "name":name,
       "email":email,
       "number":num,
       "linkedIn":url
   }

    const { setVisible, bindings } = useModal();
    const [visible, setVVisible] = React.useState(false);
    const handler = () => setVVisible(true);

    const closeHandler = () => {
        setVVisible(false);
        console.log(obj);
    };


    // function handle() {
    //     alert(value)
    // }

    return (
        <>
            <Card css={{ p: "$6", mw: "400px" }}>
                <Card.Header>
                    <img
                        alt="nextui logo"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width="50px"
                        height="50px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text h4 css={{ lineHeight: "$xs" }}>
                                Software developer
                            </Text>
                        </Grid>
                        <Grid xs={12}>
                            <Text css={{ color: "$accents8" }}>CodeBeat</Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                    <Grid.Container gap={0}>
                        <Grid>
                            <Badge color="primary">Primary</Badge>
                        </Grid>
                        <Grid>
                            <Badge color="primary">Primary</Badge>
                        </Grid>
                        <Grid>
                            <Badge color="primary">Primary</Badge>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
                <Card.Footer className='cardFoot'>
                    <Button color="success" shadow auto onPress={handler}>Apply</Button>
                    <Button auto shadow onPress={() => setVisible(true)}>View Job</Button>
                </Card.Footer>
            </Card>




            <Modal
                scroll
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        <b>Software Developer at CodeBeat</b>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et.<br /><br />
                        <b>Skills Required:</b>
                    </Text>

                    <Grid.Container gap={0}>
                        <Grid>
                            <Badge color="primary">Primary</Badge>
                        </Grid>
                        <Grid>
                            <Badge color="primary">Primary</Badge>
                        </Grid>
                        <Grid>
                            <Badge color="primary">Primary</Badge>
                        </Grid>
                    </Grid.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto onPress={() => setVisible(false)}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>



            <Modal
                closeButton
                scroll
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                width='500px'
                className='mx-2'
            >
                <Modal.Header>
                    <Text id="modal-title" b size={28}>
                        Apply for the Job
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <div className=''>
                        <Input
                            // clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Name"
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>
                    <div className=''>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Email"
                            value={email} 
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div className='my-3'>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Contact Number"
                            value={num} 
                            onChange={(e) => {setNum(e.target.value)}}
                        />
                    </div>

                    <div className='my-3'>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="LinkedIn URL"
                            value={url} 
                            onChange={(e) => {setUrl(e.target.value)}}
                        />
                    </div>

                    
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Close
                    </Button>
                    <Button auto onPress={closeHandler}>
                        Apply
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default JobCard