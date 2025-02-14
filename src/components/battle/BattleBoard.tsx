import React, { useState } from "react";
import styled from "styled-components";
import { CircularProgress, Tab, Tabs } from "@material-ui/core";
import { BoardProps } from "boardgame.io/react";
import { IGameState } from "types/battle";
import Panels from "containers/Panels";
import { useLanguage } from "containers/LanguageProvider";
import useLocalStorage from "hooks/useLocalStorage";
import BattleHelp from "./BattleHelp";
import BattleLog from "./BattleLog";
import BattleSettings, {
  IGameSetupProps,
  SelectTeamButton,
} from "./BattleSettings";
import CharacterButton from "./CharacterButton";
import Header from "components/Header";
import IconButton from "components/IconButton";
import {
  AttackIcon,
  GuardIcon,
  UltimateIcon,
  UndoIcon,
  RedoIcon,
  ResetIcon,
  SettingIcon,
  HelpIcon,
  NoteIcon,
} from "components/icon";
import Snackbar from "components/Snackbar";
import { canAttack, canSelect, canTarget, canUltimate } from "utils/battle";

const TabPanel = ({
  children,
  value,
  index,
}: {
  children: React.ReactNode;
  value: number;
  index: number;
}): JSX.Element => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`info-tabpanel-${index}`}
    aria-labelledby={`info-tab-${index}`}
  >
    {value === index && children}
  </div>
);

const tabIcons = [NoteIcon, SettingIcon, HelpIcon];

const InfoTabs = ({
  G,
  settingProps,
}: {
  G: IGameState;
} & { settingProps: IGameSetupProps }): JSX.Element => {
  const { pageString }: any = useLanguage();

  const [tabIndex, setTabIndex] = useLocalStorage("battle-setting-tab", 0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <StyledTabs
        value={tabIndex}
        onChange={handleChange}
        aria-label="Info tabs"
        variant="fullWidth"
      >
        {pageString.battle.index.tabs.map((tab: string, ind: number) => (
          <StyledTab
            label={tab}
            id={`info-tab-${ind}`}
            aria-controls={`info-tabpanel-${ind}`}
            icon={tabIcons[ind]}
            $selected={tabIndex === ind}
            key={ind}
          />
        ))}
      </StyledTabs>
      <TabPanel value={tabIndex} index={0}>
        <BattleLog G={G} />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <BattleSettings {...settingProps} />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <BattleHelp />
      </TabPanel>
    </>
  );
};

const StyledTabs = styled(Tabs)`
  && {
    min-height: 0;
    .MuiTabs-indicator {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
const StyledTab = styled(Tab)<{ $selected: boolean }>`
  && {
    padding: 0.3rem 0.5rem;
    min-width: 120px;
    min-height: 0;
    .MuiTab-wrapper {
      flex-direction: row;
      margin-bottom: 0.5rem;
      svg {
        height: 1.6rem;
        width: 1.6rem;
        margin-right: 0.4rem;
        margin-bottom: 0;
        fill: ${(props) =>
          props.theme.colors[props.$selected ? "secondary" : "onSurface"]};
      }
    }
  }
`;

export type BattleBoardProps = BoardProps<IGameState> & {
  settingProps: IGameSetupProps;
  handleReset: () => void;
};

export const BattleBoard = ({
  G,
  ctx,
  moves,
  undo,
  redo,
  settingProps,
  handleReset,
}: BattleBoardProps): JSX.Element => {
  const { pageString }: any = useLanguage();
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const selected = G.selected[ctx.currentPlayer];
  const target = G.target[ctx.currentPlayer];

  const handleCharacterClick = (ind: number, player: string) => () => {
    if (ctx.turn > 0 && !ctx.gameover) {
      if (ctx.currentPlayer === player) {
        if (canSelect(G, ctx, ind)) {
          moves.switchMember(ind);
          return;
        }
      } else if (canTarget(G, ctx, ind)) {
        moves.switchTarget(ind);
        return;
      }
    }
    setSnackbarOpen(true);
  };

  const handleAttackClick = () => {
    if (ctx.turn > 0 && !ctx.gameover && canAttack(G, ctx, selected, target)) {
      moves.attack(selected, target);
      return;
    }
    setSnackbarOpen(true);
  };

  const handleUltimateClick = () => {
    if (
      ctx.turn > 0 &&
      !ctx.gameover &&
      canUltimate(G, ctx, selected, target)
    ) {
      moves.ultimate(selected, target);
      return;
    }
    setSnackbarOpen(true);
  };

  const handleGuardClick = () => {
    if (ctx.turn > 0 && !ctx.gameover && canSelect(G, ctx, selected)) {
      moves.guard(selected);
      return;
    }
    setSnackbarOpen(true);
  };

  const handleUndoClick = () => {
    if (ctx.turn > 0 && !ctx.gameover) {
      undo();
      return;
    }
    setSnackbarOpen(true);
  };

  const handleRedoClick = () => {
    if (ctx.turn > 0 && !ctx.gameover) {
      redo();
      return;
    }
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Panels panelsWidth={["37.5%", "62.5%"]}>
      <MainPanel $isBattleOver={ctx.turn > 0 && ctx.gameover !== undefined}>
        <div>
          {
            pageString.battle.index[
              ctx.gameover?.winner === "0" ? "win" : "lose"
            ]
          }
        </div>
        <StyledHeader
          title={`${pageString.battle.index.turn}: ${Math.floor(
            (ctx.turn + 1) / 2
          )}`}
          end={
            ctx.currentPlayer === "1" &&
            !ctx.gameover && (
              <SpinnerWrapper>
                <span>{pageString.battle.index.calculating}</span>
                <StyledSpinner size={24} thickness={6} disableShrink />
              </SpinnerWrapper>
            )
          }
        />
        <LineupsContainer>
          {Object.entries(G.lineups).map(([player, lineup]) => (
            <div key={player}>
              {lineup.length === 0 ? (
                <StyledSelectTeamButton
                  isFromPlayer={player === "0"}
                  lineups={settingProps.lineups}
                  text={
                    pageString.battle.index[
                      player === "0" ? "selectYourTeam" : "selectEnemies"
                    ]
                  }
                />
              ) : (
                lineup.map((c, ind) => (
                  <CharacterButton
                    key={ind}
                    G={G}
                    ctx={ctx}
                    player={player}
                    character={c}
                    onClick={handleCharacterClick(ind, player)}
                  />
                ))
              )}
            </div>
          ))}
        </LineupsContainer>
        <ControlPanel>
          <IconButton
            onClick={handleAttackClick}
            tooltipText={pageString.battle.index.controlPanel.attack}
          >
            {AttackIcon}
          </IconButton>
          <IconButton
            onClick={handleUltimateClick}
            tooltipText={pageString.battle.index.controlPanel.ultimate}
          >
            {UltimateIcon}
          </IconButton>
          <IconButton
            onClick={handleGuardClick}
            tooltipText={pageString.battle.index.controlPanel.guard}
          >
            {GuardIcon}
          </IconButton>
          <IconButton
            onClick={handleUndoClick}
            tooltipText={pageString.battle.index.controlPanel.undo}
          >
            {UndoIcon}
          </IconButton>
          <IconButton
            onClick={handleRedoClick}
            tooltipText={pageString.battle.index.controlPanel.redo}
          >
            {RedoIcon}
          </IconButton>
          <IconButton
            onClick={handleReset}
            tooltipText={pageString.battle.index.controlPanel.reset}
          >
            {ResetIcon}
          </IconButton>
        </ControlPanel>
        <Snackbar
          open={isSnackbarOpen}
          onClose={handleSnackbarClose}
          message={pageString.battle.index.invalidMove}
          type="error"
        />
      </MainPanel>
      <InfoTabs G={G} settingProps={settingProps} />
    </Panels>
  );
};

const LineupsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1001px) {
    min-height: calc(80vh - 5.3rem);
  }
  > div:first-child {
    margin-right: 1rem;
  }
`;
const MainPanel = styled.div<{ $isBattleOver: boolean }>`
  position: relative;
  > div:first-child {
    display: ${(props) => (props.$isBattleOver ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: -1.5rem;
    left: -1rem;
    width: calc(100% + 2rem);
    height: calc(100% + 2rem);
    border-radius: 0.25rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
  }
`;
const StyledHeader = styled(Header)`
  margin-bottom: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
`;
const ControlPanel = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: -0.5rem;
`;
const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;
const StyledSpinner = styled(CircularProgress)`
  && {
    margin: 0 0.5rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
const StyledSelectTeamButton = styled(SelectTeamButton)`
  &&&& {
    height: 100%;
    padding: 1rem;
  }
`;
