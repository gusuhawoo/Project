import {
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';

const Wrapper = styled('p')(() => ({
  lineHeight: '1.5em',
  fontWeight: '300',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  margin: '0',
  padding: '0',
}));

const items = [
  {
    id: 1,
    teamName: 'teamA',
    date: '2024/02/03',
    accountName: 'accountA',
    numberOfTickets: 1,
  },
  {
    id: 2,
    teamName: 'teamB',
    date: '2024/02/03',
    accountName: 'accountB',
    numberOfTickets: 2,
  },
  {
    id: 3,
    teamName: 'teamC',
    date: '2024/02/03',
    accountName: 'accountC',
    numberOfTickets: 3,
  },
];

export default function ListAndTable() {
  return (
    <Wrapper>
      <List
        style={{
          border: '1px solid #000',
          borderRadius: '3px',
        }}
      >
        <ListItem
          style={{
            borderBottom: 'thick double #000',
            margin: '0',
            padding: '0',
          }}
        >
          <ListItemText primary="Team name" />
          <ListItemText
            primary="残り未割当チケット数"
            style={{ textAlign: 'end' }}
          />
        </ListItem>
        {items.map((item) => (
          <>
            <ListItem key={item.id}>
              <ListItemText primary={item.teamName} />
            </ListItem>
            <ListItem>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>申請日時</TableCell>
                    <TableCell>申請者</TableCell>
                    <TableCell>希望チケット数</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.accountName}</TableCell>
                    <TableCell>{item.numberOfTickets}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ListItem>
          </>
        ))}
      </List>
    </Wrapper>
  );
}
