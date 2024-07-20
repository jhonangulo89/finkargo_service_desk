from app.models.issue import Issue as IssueModel
from app.schemas.issue import IssueCreate, IssueUpdate
from uuid import UUID

class IssueService():
    def __init__(self, db) -> None:
        self.db = db

    def get_issues(self):
        result = self.db.query(IssueModel).all()
        return result

    def get_issue(self, id: UUID):
        result = self.db.query(IssueModel).filter(IssueModel.issue_id == id).first()
        return result

    def create_issue(self, issue: IssueCreate):
        new_issue =IssueModel(**issue.dict())
        self.db.add(new_issue)
        self.db.commit()
        return

    def update_issue(self, id: int, issue: IssueUpdate):
        result = self.db.query(IssueModel).filter(IssueModel.issue_id == id).first()
        if not result:
            return None
        result.title = issue.title
        result.description = issue.description
        result.priority = issue.priority
        result.status = issue.status
        result.type = issue.type
        self.db.commit()
        return result

    def delete_issue(self, id: UUID):
        result = self.db.query(IssueModel).filter(IssueModel.issue_id == id).first()
        if not result:
            return None
        self.db.delete(result)
        self.db.commit()
        return result
