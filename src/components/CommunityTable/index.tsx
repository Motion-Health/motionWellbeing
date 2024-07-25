import {
  Alert,
  AlertColor,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Search from "@/components/Search";
import { useAccountContext } from "@/context/AccountContext";
import { Account } from "@/models/Account";
import { useGetAllAccounts } from "@/services/account/useGetAllAccounts";

import DeleteModal from "../modals/DeleteModal";
import ServiceProviderDetailsModal from "../modals/ServiceProviderDetailsModal";

export default function CommunityTable() {
  const { account } = useAccountContext();
  const { accountId, accountStatus } = account;

  const handleEditAccount = (serviceProvider: Account) => {
    setToggleServiceProviderModal(Math.random());
    setServiceProviderData(serviceProvider);
    setModalOpenAction("edit-service-provider");
  };

  const [toggleDeleteModal, setToggleDeleteModal] = useState<number>(1);
  const [accountToDelete, setAccountToDelete] = useState<Account | null>(null);

  const handleDeleteAccount = (serviceProvider: Account) => {
    setToggleDeleteModal(Math.random());
    setAccountToDelete(serviceProvider);
  };

  const { data: loadedAccounts, refetch: refetchAccounts } =
    useGetAllAccounts();

  const [displayAccounts, setDisplayAccounts] = useState<Account[]>(
    loadedAccounts?.allAccounts
  );

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (accountId && loadedAccounts?.allAccounts) {
      const orderedAccounts = orderAccounts(loadedAccounts.allAccounts);
      setDisplayAccounts(orderedAccounts);
    }
  }, [loadedAccounts, accountId, searchValue === ""]);

  const orderAccounts = (loadedAccounts: Account[]) => {
    const usersAccount: Account | undefined = loadedAccounts?.find(
      (account: Account) => account?.accountId === accountId
    );
    const otherAccounts: Account[] = loadedAccounts
      ?.filter((account: Account) => account?.accountId !== accountId)
      ?.sort((a: Account, b: Account) => {
        if (a.serviceProviderName === null) return 1;
        if (b.serviceProviderName === null) return -1;
        if (a?.serviceProviderName < b?.serviceProviderName) return -1;
        if (a?.serviceProviderName > b?.serviceProviderName) return 1;
        return 0;
      });

    const orderedAccounts = [];
    if (usersAccount !== undefined) orderedAccounts.push(usersAccount);
    if (otherAccounts?.length) orderedAccounts.push(...otherAccounts);

    return orderedAccounts;
  };

  const handleSearchedData = (searchedAccounts: null | Account[]) => {
    if (searchedAccounts !== null) {
      const orderedResults = orderAccounts(searchedAccounts);
      setDisplayAccounts(orderedResults);
    } else {
      setDisplayAccounts(loadedAccounts);
    }
  };
  const [page, setPage] = useState(0);
  const rowsPerPage = 20;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    if (event?.target?.dataset?.testid === "KeyboardArrowRightIcon")
      setPage(page + 1);
    if (event?.target?.dataset?.testid === "KeyboardArrowLeftIcon")
      setPage(page - 1);
  };

  const [toggleServiceProviderModal, setToggleServiceProviderModal] =
    useState<number>(1);
  const [modalOpenAction, setModalOpenAction] = useState<string | null>(null);

  const [serviceProviderData, setServiceProviderData] =
    useState<Account | null>(null);

  const router = useRouter();

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("success");

  useEffect(() => {
    refetchAccounts();

    if (router.query?.accountUpdated !== undefined) {
      setAlertMessage(
        `Success - The details for ${
          router.query?.accountUpdated || "service provider"
        } have been updated`
      );
      setAlertSeverity("success");
    }

    if (router.query?.accountCreated !== undefined) {
      setAlertMessage(
        `Success - ${
          router.query?.accountCreated || "Service provider"
        } has been created. An email has been sent to the admin.`
      );
      setAlertSeverity("success");
    }

    if (router.query?.deletedAccount !== undefined) {
      setAlertMessage(
        `Success - ${
          router.query?.deletedAccount || "service provider"
        } has been deleted. The admin will no longer have access.`
      );
      setAlertSeverity("success");
    }

    if (router.query?.passwordReset) {
      setAlertMessage(
        `Success - A password reset link has been sent to ${router.query?.passwordReset}`
      );
      setAlertSeverity("success");
    }
  }, [router.query]);

  return (
    <>
      {(accountStatus === "admin" || accountStatus === "group") && (
        <Search
          placeholder="Find other members of the community"
          data={loadedAccounts}
          searchKey={"serviceProviderName"}
          searchedData={handleSearchedData}
        />
      )}

      <ServiceProviderDetailsModal
        toggleServiceProviderModal={toggleServiceProviderModal}
        modalOpenAction={modalOpenAction}
        serviceProviderData={serviceProviderData}
      />
      <DeleteModal
        toggleDeleteModal={toggleDeleteModal}
        accountToDelete={accountToDelete}
      />

      {alertMessage && (
        <Alert
          icon={false}
          severity={alertSeverity}
          sx={{ position: "relative", my: "3rem", padding: "1rem" }}
          onClose={() => setAlertMessage(null)}
        >
          {alertMessage}
        </Alert>
      )}

      <div className="page">
        {displayAccounts?.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Service provider</TableCell>
                  {/* <TableCell align="left">
                    Activities completed in {moment().format("MMMM")}
                  </TableCell> */}
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? displayAccounts.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : displayAccounts
                ).map((account, index) => {
                  const cellBorder = account?.accountId === accountId ? 1 : 0;
                  return (
                    <TableRow key={index + account?.accountId}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ borderTop: cellBorder, borderBottom: cellBorder }}
                      >
                        {account?.serviceProviderName}
                      </TableCell>
                      {/* <TableCell
                        align="left"
                        sx={{ borderTop: cellBorder, borderBottom: cellBorder }}
                      >
                        {account?.activitiesCompleted}
                      </TableCell> */}
                      <TableCell
                        align="right"
                        sx={{ borderTop: cellBorder, borderBottom: cellBorder }}
                      >
                        {(accountStatus === "admin" ||
                          accountId === account?.accountId) && (
                          <Button
                            variant="link"
                            onClick={() => {
                              handleEditAccount(account);
                            }}
                          >
                            <img
                              alt="edit"
                              src="/assets/icons/ph_pencil-simple.svg"
                            />
                          </Button>
                        )}
                        {accountStatus === "admin" && (
                          <Button
                            variant="link"
                            onClick={() => {
                              handleDeleteAccount(account);
                            }}
                          >
                            <img
                              alt="delete"
                              src="/assets/icons/ph_trash.svg"
                            />
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              {displayAccounts.length > rowsPerPage && (
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[20]}
                      page={page}
                      count={displayAccounts.length}
                      rowsPerPage={20}
                      onPageChange={() => handleChangePage(event, page)}
                    />
                  </TableRow>
                </TableFooter>
              )}
            </Table>
          </TableContainer>
        )}

        {(displayAccounts?.length === 0 || displayAccounts?.length === 0) && (
          <Typography sx={{ textAlign: "center" }}>
            There are no service providers to display
          </Typography>
        )}
      </div>
    </>
  );
}
